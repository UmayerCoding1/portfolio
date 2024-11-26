

const skills = [
    {
      "img": "https://i.postimg.cc/k4Vqwvg7/html.png",
      "skill_name": "HTML5"
    },
    {
      "img": "https://i.postimg.cc/1tN1DRvt/css.png",
      "skill_name": "CSS3"
    },
    {
      "img": "https://i.postimg.cc/8cR8nKQg/js.png",
      "skill_name": "JavaScript"
    },
    {
      "img": "https://i.postimg.cc/RZqsWssC/tailwind.png",
      "skill_name": "tailwind css"
    },
    {
      "img": "https://i.postimg.cc/7YtXr1xF/bosstrap.png",
      "skill_name": "bootstrap"
    },
    {
      "img": "https://i.postimg.cc/hGL9vVBP/react.png",
      "skill_name": "react.js"
    },
    {
      "img": "https://i.postimg.cc/44ShJW9Q/mui.png",
      "skill_name": "materialUI"
    },
    {
      "img": "https://i.ibb.co/jTFK3yM/express.png",
      "skill_name": "express.js"
    },
    {
      "img": "https://i.ibb.co/Q92TJtq/node.png",
      "skill_name": "node.js"
    },
    {
      "img": "https://i.postimg.cc/h4d7t91F/db.png",
      "skill_name": "mongodb"
    },
    {
      "img": "https://i.postimg.cc/YSPhp94q/firebase.png",
      "skill_name": "firebase"
    },
    {
      "img": "https://i.postimg.cc/PrHNf0qZ/git.png",
      "skill_name": "git"
    },
    {
      "img": "https://i.postimg.cc/DZsynckB/github.png",
      "skill_name": "github"
    },
    {
      "img": "https://i.postimg.cc/Xqkjy7v5/figma.png",
      "skill_name": "figma"
    },
    {
      "img": "https://i.postimg.cc/85hDqPMY/npm.png",
      "skill_name": "npm"
    },
    {
      "img": "https://i.postimg.cc/4N4ZSGd8/strip.png",
      "skill_name": "strip"
    },
    {
      "img": "https://i.postimg.cc/7hKvkC6K/sslcommerz.png",
      "skill_name": "sslcommerz"
    }
  ]

const Skill = () => {

    // const [skills,setSkills] = useState([]);
    // useEffect(() => {
    //     fetch('skil.json')
    //     .then(res => res.json())
    //     .then(data => setSkills(data))
    // },[])

    console.log(skills);
    
    return (
        <div id='skill' className='lg:h-screen'>
           <div className='flex flex-col items-center justify-center '>
           <h3 className='text-3xl text-[#0D5469] font-bold'>Skills Overview?</h3>
           <p className='text-xs'>Technologies that drive my development process</p>
           </div>

           <div className='lg:grid grid-cols-5 gap-5 lg:mt-5 p-10 lg:p-2'>
              {skills?.map(skill => {
                return([
                    <div key={skill.skill_name} className='w-full h-32 bg-white rounded-xl my-4 shadow-xl flex items-center justify-center  transition-all ease-linear duration-300 lg:hover:w-[calc(100%-10px)] lg:hover:h-[calc(100%-10px)]  relative lg:my-0 group'>
                        {/* <img className='w-16' src={skill.img} alt="" /> */}
                        <img className="w-10" src={skill.img} alt="" />
                        <span className='absolute text-xs top-[-25px] bg-[#1F2937] text-white p-1 rounded-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100 uppercase'>{skill.skill_name}</span>
                        
                    </div>
                ])
              })}
           </div>
        </div>
    );
};

export default Skill;