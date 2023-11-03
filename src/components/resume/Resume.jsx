
    import React from 'react'
    import './Resume.css'; 
    import img1 from'../../imagess/img.jpg';

    function Resume() {
      return (
        <div>
 <h2>RESUME</h2>   
 <hr/>
 <form>
    <center> <img src={img1} className ="img1" alt="" /></center>
    <h3> name:Mahima </h3  >
    <h3>email:sample@gmail.com</h3>
    <h3>ph-no:89765678998</h3>
    <h3>githbub profile:</h3>
         <a href="github.com/mahima-c" target="_blank"> click here</a>
    <h1 class="heading">PROFILE </h1>
    <h3><p >B.E student.
        I consider my self a responsible and orderly person.<br/>
        I am looking forward for my first work experience.
        </p></h3>
     <h1 class="heading" >EDUCATION </h1>
    <h3 >High School:</h3>
    <h4 >
        vidyodaya public School</h4>
        <h3 >Pre-University:</h3>
    <h3 > vidyodaya Pre-University College </h3>
    <h3 >Bachelor of Engineering:</h3>
    <h3 >SMVITM  </h3>
    <h1 class="heading" > SKILLS </h1>
    <h3 > Web Developer</h3>
    <h3 > Design Thinking</h3>
    <h3 > Effective Communicater</h3>
     <h1 class="heading">Technical skills </h1>
<h2 class="heading" >
     ➢ Programing Language: C, C++, JAVA, PYTHON.</h2>
      <h2 class="heading" >➢ Technical _MS Word.</h2>
 <h2 class="heading" >➢ Soft skills: Communication and presenting seminar.</h2>
<h2 class="heading" >➢Html , CSS and Javascript </h2>
 
    
</form>    

</div>
      )
    }
    
    export default Resume
    

