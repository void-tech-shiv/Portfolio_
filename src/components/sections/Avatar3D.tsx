import { useEffect, useRef } from 'react';
import styles from './Avatar3D.module.css';
type Mat = Float32Array;
type Part = {x:number;y:number;z:number;sx:number;sy:number;sz:number;color:[number,number,number];rz?:number;rx?:number;glow?:number};
function mul(a:Mat,b:Mat):Mat { const o=new Float32Array(16); for(let c=0;c<4;c++)for(let r=0;r<4;r++)for(let k=0;k<4;k++)o[c*4+r]+=a[k*4+r]*b[c*4+k];return o; }
function id():Mat {return new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]);}
function move(x:number,y:number,z:number):Mat {const m=id();m[12]=x;m[13]=y;m[14]=z;return m;}
function size(x:number,y:number,z:number):Mat {const m=id();m[0]=x;m[5]=y;m[10]=z;return m;}
function rotY(a:number):Mat {const c=Math.cos(a),s=Math.sin(a);return new Float32Array([c,0,-s,0,0,1,0,0,s,0,c,0,0,0,0,1]);}
function rotZ(a:number):Mat {const c=Math.cos(a),s=Math.sin(a);return new Float32Array([c,s,0,0,-s,c,0,0,0,0,1,0,0,0,0,1]);}
function rotX(a:number):Mat {const c=Math.cos(a),s=Math.sin(a);return new Float32Array([1,0,0,0,0,c,s,0,0,-s,c,0,0,0,0,1]);}
function perspective(aspect:number):Mat {const f=1/Math.tan(Math.PI/6.5),n=.1,far=40;return new Float32Array([f/aspect,0,0,0,0,f,0,0,0,0,(far+n)/(n-far),-1,0,0,2*far*n/(n-far),0]);}
function mesh(){
  const points:number[]=[];
  const pt=(a:number,b:number)=>[Math.sin(a)*Math.cos(b),Math.cos(a),Math.sin(a)*Math.sin(b)];
  for(let i=0;i<18;i++)for(let j=0;j<24;j++){
    const a=pt(Math.PI*i/18,2*Math.PI*j/24),b=pt(Math.PI*(i+1)/18,2*Math.PI*j/24);
    const c=pt(Math.PI*(i+1)/18,2*Math.PI*(j+1)/24),d=pt(Math.PI*i/18,2*Math.PI*(j+1)/24);
    for(const p of [a,b,d,b,c,d])points.push(...p);
  }
  return new Float32Array(points);
}
function makeShader(gl:WebGLRenderingContext,type:number,source:string) {
  const s=gl.createShader(type);if(!s)return null;gl.shaderSource(s,source);gl.compileShader(s);
  if(!gl.getShaderParameter(s,gl.COMPILE_STATUS)){console.warn('Avatar shader:',gl.getShaderInfoLog(s));gl.deleteShader(s);return null;}return s;
}
function createScene(gl:WebGLRenderingContext){
  const vs=makeShader(gl,gl.VERTEX_SHADER,'attribute vec3 position; uniform mat4 mvp; uniform mat4 model; varying vec3 normal; void main(){normal=normalize(mat3(model)*position);gl_Position=mvp*vec4(position,1.0);}');
  const fs=makeShader(gl,gl.FRAGMENT_SHADER,'precision mediump float;varying vec3 normal;uniform vec3 color;uniform float glow;void main(){vec3 n=normalize(normal);float diffuse=max(dot(n,normalize(vec3(-.35,.85,1.0))),0.0);float rim=pow(1.0-max(dot(n,vec3(0.0,0.1,0.99)),0.0),2.5);vec3 c=color*(.33+diffuse*.67)+vec3(.1,.65,.9)*rim*(.25+glow)+color*glow*.45;gl_FragColor=vec4(c,1.0);}');
  if(!vs||!fs)return null;
  const program=gl.createProgram();if(!program)return null;
  gl.attachShader(program,vs);gl.attachShader(program,fs);gl.linkProgram(program);
  if(!gl.getProgramParameter(program,gl.LINK_STATUS)){console.warn('Avatar link:',gl.getProgramInfoLog(program));return null;}
  const vertices=mesh(),buffer=gl.createBuffer();if(!buffer)return null;
  gl.bindBuffer(gl.ARRAY_BUFFER,buffer);gl.bufferData(gl.ARRAY_BUFFER,vertices,gl.STATIC_DRAW);
  gl.enable(gl.DEPTH_TEST);gl.depthFunc(gl.LEQUAL);
  return {program,buffer,count:vertices.length/3,position:gl.getAttribLocation(program,'position'),
    mvp:gl.getUniformLocation(program,'mvp'),model:gl.getUniformLocation(program,'model'),color:gl.getUniformLocation(program,'color'),glow:gl.getUniformLocation(program,'glow')};
}
export function Avatar3D(){
  const ref=useRef<HTMLCanvasElement>(null);
  useEffect(()=>{
    const canvas=ref.current;if(!canvas)return;
    const gl=canvas.getContext('webgl',{alpha:true,antialias:true,premultipliedAlpha:false});
    if(!gl)return;
    const scene=createScene(gl);if(!scene)return;
    let live=true,visible=true,frameId=0,progress=0,mouse=0,time=0,last=0;
    const dark:[number,number,number]=[.07,.12,.18],silver:[number,number,number]=[.18,.26,.34],bright:[number,number,number]=[.30,.48,.58];
    function modelParts(t:number):Part[]{
      const movement=document.documentElement.dataset.reduceMotion==='true'?0:1;
      const bob=movement*Math.sin(t*1.7)*.03;
      const wave=movement*(progress>.42?Math.sin(t*2)*.22*Math.min((progress-.42)*2,1):0);
      const neon:[number,number,number]=document.documentElement.dataset.accent==='violet'?[.68,.42,1]:[0,.79,.93];
      return [
        {x:0,y:.34,z:0,sx:.49,sy:.69,sz:.29,color:dark},
        {x:0,y:.50,z:.16,sx:.44,sy:.43,sz:.18,color:silver},
        {x:0,y:.58,z:.32,sx:.27,sy:.17,sz:.045,color:neon,glow:.28},
        {x:0,y:-.31,z:0,sx:.40,sy:.28,sz:.27,color:dark},
        {x:0,y:1.12,z:0,sx:.17,sy:.20,sz:.18,color:silver},
        {x:0,y:1.55,z:0,sx:.30,sy:.36,sz:.28,color:dark,rx:bob},
        {x:0,y:1.56,z:.24,sx:.25,sy:.145,sz:.075,color:neon,glow:.8},
        {x:0,y:1.36,z:.245,sx:.19,sy:.03,sz:.06,color:bright},
        {x:-.61,y:.80,z:0,sx:.235,sy:.22,sz:.23,color:silver},
        {x:.61,y:.80,z:0,sx:.235,sy:.22,sz:.23,color:silver},
        {x:-.70,y:.33,z:0,sx:.17,sy:.41,sz:.18,color:dark,rz:-.11},
        {x:.70,y:.33,z:0,sx:.17,sy:.41,sz:.18,color:dark,rz:.11+wave},
        {x:-.80,y:-.22,z:.04,sx:.14,sy:.34,sz:.16,color:silver},
        {x:.83+wave*.25,y:-.22+wave*.12,z:.04,sx:.14,sy:.34,sz:.16,color:silver,rz:wave},
        {x:-.81,y:-.59,z:.07,sx:.155,sy:.17,sz:.15,color:bright},
        {x:.84+wave*.25,y:-.59+wave*.25,z:.07,sx:.155,sy:.17,sz:.15,color:bright},
        {x:-.24,y:-.82+bob,z:0,sx:.22,sy:.49,sz:.24,color:silver},
        {x:.24,y:-.82-bob,z:0,sx:.22,sy:.49,sz:.24,color:silver},
        {x:-.24,y:-1.38+bob,z:.03,sx:.18,sy:.35,sz:.2,color:dark},
        {x:.24,y:-1.38-bob,z:.03,sx:.18,sy:.35,sz:.2,color:dark},
        {x:-.24,y:-1.71+bob,z:.15,sx:.23,sy:.14,sz:.33,color:dark},
        {x:.24,y:-1.71-bob,z:.15,sx:.23,sy:.14,sz:.33,color:dark},
        {x:-.24,y:-1.20+bob,z:.21,sx:.1,sy:.07,sz:.05,color:neon,glow:.6},
        {x:.24,y:-1.20-bob,z:.21,sx:.1,sy:.07,sz:.05,color:neon,glow:.6}
      ];
    }
    const resize=()=>{
      const r=canvas.getBoundingClientRect(),dpr=Math.min(window.devicePixelRatio||1,1.5);
      canvas.width=Math.max(1,Math.round(r.width*dpr));canvas.height=Math.max(1,Math.round(r.height*dpr));
      gl.viewport(0,0,canvas.width,canvas.height);
    };
    const onScroll=()=>{
      const journey=document.getElementById('journey');if(!journey)return;
      const r=journey.getBoundingClientRect();progress=Math.max(0,Math.min(1,-r.top/Math.max(1,r.height-innerHeight)));
    };
    const onMove=(e:PointerEvent)=>{const r=canvas.getBoundingClientRect();mouse=Math.max(-1,Math.min(1,((e.clientX-r.left)/r.width-.5)*2));};
    const observer=new IntersectionObserver(e=>{visible=Boolean(e[0]?.isIntersecting);});
    observer.observe(canvas);
    const tick=(now:number)=>{
      if(!live)return;frameId=requestAnimationFrame(tick);
      if(!visible||document.hidden)return;
      if(now-last<28)return;
      time+=Math.min((now-last)/1000,.05);last=now;
      const still=document.documentElement.dataset.reduceMotion==='true';
      const turn=(still?0:Math.sin(time*.26)*.13)+(progress-.1)*1.8+mouse*.18;
      const rise=still?0:Math.sin(time*1.15)*.04;
      const view=mul(move(0,-.02,-5.85),rotX(-.05));
      const vp=mul(perspective(canvas.width/Math.max(canvas.height,1)),view);
      const root=mul(move(0,rise,0),rotY(turn));
      gl.clearColor(0,0,0,0);gl.clear(gl.COLOR_BUFFER_BIT|gl.DEPTH_BUFFER_BIT);
      gl.useProgram(scene.program);gl.bindBuffer(gl.ARRAY_BUFFER,scene.buffer);gl.enableVertexAttribArray(scene.position);gl.vertexAttribPointer(scene.position,3,gl.FLOAT,false,0,0);
      for(const p of modelParts(time)){
        let model=mul(root,move(p.x,p.y,p.z));
        if(p.rz)model=mul(model,rotZ(p.rz));
        if(p.rx)model=mul(model,rotX(p.rx));
        model=mul(model,size(p.sx,p.sy,p.sz));
        gl.uniformMatrix4fv(scene.model,false,model);
        gl.uniformMatrix4fv(scene.mvp,false,mul(vp,model));
        gl.uniform3fv(scene.color,p.color);
        gl.uniform1f(scene.glow,p.glow||0);
        gl.drawArrays(gl.TRIANGLES,0,scene.count);
      }
    };
    resize();onScroll();frameId=requestAnimationFrame(tick);
    window.addEventListener('resize',resize);
    window.addEventListener('scroll',onScroll,{passive:true});
    canvas.addEventListener('pointermove',onMove);
    return ()=>{
      live=false;cancelAnimationFrame(frameId);observer.disconnect();
      window.removeEventListener('resize',resize);window.removeEventListener('scroll',onScroll);canvas.removeEventListener('pointermove',onMove);
      gl.deleteBuffer(scene.buffer);gl.deleteProgram(scene.program);
    };
  },[]);
  return <div className={styles.stage} role="img" aria-label="Stylized futuristic full-body 3D avatar, animated by scroll and pointer movements">
    <div className={styles.orbit} aria-hidden="true" />
    <div className={styles.scanner} aria-hidden="true" />
    <canvas ref={ref} className={styles.canvas} aria-hidden="true" />
    <div className={styles.cornerOne} aria-hidden="true" /><div className={styles.cornerTwo} aria-hidden="true" />
    <div className={styles.overlayTop}>AVATAR / PROTOCOL 001 <span>LIVE RENDER</span></div>
    <div className={styles.overlayBottom}><span className={styles.dot} /> SCROLL TO EVOLVE <span>3D · INTERACTIVE</span></div>
  </div>;
}
