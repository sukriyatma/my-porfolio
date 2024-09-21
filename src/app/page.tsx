import ExperienceItem from "@/components/experienceItem";
import ProjectItem from "@/components/projectItem";
import SocialMediaItem from "@/components/socialMediaItem";
import TechToolsItem from "@/components/techToolsItems";
import Experience from "@/data/experience";
import Languages from "@/data/languages";
import Projects from "@/data/projects";
import SocialMedia from "@/data/socialMedia";
import Tools from "@/data/tools";

export default function Home() {
  return (
    <>
    {/* p-[3.125rem_6.25rem] */}
      <div className="flex w-full py-[5rem] px-[1rem] lg:px-[3.125rem] flex-col justify-between items-center gap-[4rem]">

        <div className="w-full flex flex-wrap lg:flex-row items-start gap-[6.25rem] justify-center">
          {/* Up */}
          
          <div className="flex min-w-[30rem] flex-col items-start gap-[1.875rem] px-[3rem]">
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
              <div className="flex justify-center items-center gap-[0.625rem] rounded-[0.3125rem] border border-t_ter p-[0.625rem]">
                  <p className="ff-poppins text-t_primary font-medium text-[0.9375rem]">Reach me out:</p>
                  {
                    SocialMedia.map((sm) => (
                      <SocialMediaItem
                        img={sm.img}
                        link={sm.link}
                        name={sm.name}
                        key={sm.name}
                      />
                    ))
                  }
              </div>
            </div>

            <div className="flex p-[0.625rem_0rem] flex-col justify-center items-start gap-[0.625rem] self-stretch border-t border-t_ter">
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

            <div className="flex p-[0.625rem_0rem] flex-col justify-center items-start gap-[0.625rem] self-stretch border-t border-t_ter">
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

        <div className="w-full flex p-[0.625rem] flex-col items-start gap-[1.875rem] border-t border-t_ter">
          <p className="ff-anonympro text-t_primary text-[1.5rem] self-end">Frequently Used Tech Tools</p>
          <div className="flex flex-col items-center gap-[1.25rem] self-stretch">
              <div className="flex items-center gap-[1rem] lg:gap-[1.25rem]">
                {/* Languages */}
                {
                  Languages.map(lang =>                 
                    <TechToolsItem
                      key={lang.name}
                      name={lang.name}
                      imageUrl={lang.imageUrl}
                    />)
                }

              </div>
              <div className="flex items-center justify-center gap-[1.25rem] content-center flex-wrap">
                {/* Tools */}
                {
                  Tools.map(t =>                 
                    <TechToolsItem
                      key={t.name}
                      name={t.name}
                      imageUrl={t.imageUrl}
                    />)
                }

              </div>
          </div>
        </div>

        <div className="w-full flex justify-end">
          <a href="https://github.com/sukriyatma/my-porfolio" target="_blank"><p className="ff-anonympro text-t_primary underline">Freely to use this template</p></a>
        </div>
      </div>
    </>
  );
}
