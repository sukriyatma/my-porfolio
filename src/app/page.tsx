import ExperienceItem from "@/components/experienceItem";
import ProjectItem from "@/components/projectItem";
import Experience from "@/data/experience";
import Projects from "@/data/projects";
import LinkIcon from "@/icons/LinkIcon";

export default function Home() {
  return (
    <>
      <div className="flex w-full p-[3.125rem_6.25rem] flex-col justify-center items-center gap-[6.25rem]">


        <div className="flex flex-wrap items-start gap-[6.25rem]">
        {/* Up */}
          
          <div className="flex w-[26rem] flex-col items-start gap-[1.875rem]">
            {/* Profile Card*/}
            <div className="relative h-[12.5rem] w-[12.5rem] rounded-[1.25rem]  overflow-hidden">
              <img src="/img/sukriyatma.jpg" alt="sukriyatma" className="w-full h-full object-cover object-top" />
            </div>
            <div className="flex flex-col items-start gap-[0.625rem] self-stretch">
              <p className="ff-anonympro text-t_primary text-[2rem]">I’m Muhammad Sukriyatma</p>
              <p className="ff-poppins text-t_primary text-[0.9375rem]">Software Engineering Technology Student at <br/> IPB University</p>
            </div>
          </div>

          <div className="flex w-[36.0625rem] p-[0.625rem] flex-col items-start gap-[1.875rem]">
          {/* About me, Experience and Projects */}

            <div className="flex flex-col items-start self-stretch gap-[3.375rem]">
              {/* About me */}
              <p className="ff-anonympro text-t_primary text-[2rem]">I am just very good at all</p>
              <div className="flex justify-center items-center gap-[0.625rem] rounded-[0.3125rem] border-2 outline-[#B5B5B5] p-[0.625rem]">
                  <p className="ff-poppins text-t_primary font-medium text-[0.9375rem]">Reach me out:</p>
                  <a href="https://www.instagram.com/sukriyatma/">
                    <img src="/img/instagram_icon.png" alt="instagram" className="w-[1.875rem]" />
                  </a>
                  <a href="https://www.linkedin.com/in/sukriyatma/">
                    <img src="/img/linkedin_icon.png" alt="linkedin" className="w-[1.875rem]" />
                  </a>
                  <a href="https://github.com/sukriyatma">
                    <img src="/img/github_icon.png" alt="github" className="w-[1.875rem]" />
                  </a>
              </div>
            </div>

            <div className="flex p-[0.625rem_0rem] flex-col justify-center items-start gap-[0.625rem] self-stretch border-t-2 outline-[#B3B3B3]">
              {/* Experience */}
              <p className="ff-anonympro text-t_primary text-[1.5rem]">Professional Experience</p>

                {
                  Experience.map(exp => (
                    <ExperienceItem
                      key={exp.companyName}
                      position={exp.position}
                      companyName={exp.companyName}
                      companyImage={exp.companyImage}
                      periode={exp.periode}
                    />
                  ))
                }
              
            </div>

            <div className="flex p-[0.625rem_0rem] flex-col justify-center items-start gap-[0.625rem] self-stretch border-t-2 outline-[#B3B3B3]">
              {/* Projects */}
              <p className="ff-anonympro text-t_primary text-[1.5rem]">Projects</p>
              
              {
                Projects.map(project => (
                  <ProjectItem 
                    key={project.projectName}
                    projectImage={project.projectImage}
                    projectLink={project.projectLink}
                    projectName={project.projectName}
                    periode={project.periode}
                  />
                ))
              }
              
            </div>

          </div>

        </div>

      </div>
    </>
  );
}
