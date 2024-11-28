import DefaultProjectIcon from "@/icons/DefaultProjectIcon";
import LinkIcon from "@/icons/LinkIcon";
import React from "react";

interface ProjectItemProps {
    projectName: string;
    projectImage: string;
    projectLink: string;
    periode: string;
}

const ProjectItem: React.FC<ProjectItemProps> = (props: ProjectItemProps) => (
    <div className="flex p-[0.9375rem] justify-between items-center self-stretch rounded-[1.875rem] border outline-[#f3f3f3] bg-[#fff]">
        <div className="flex items-center gap-[0.9375rem]">
            <div className="w-[3.125rem] h-[3.125rem] flex justify-center items-center">
                {
                    props.projectImage? 
                    <img src={props.projectImage} alt={props.projectName}/>
                    : 
                    <DefaultProjectIcon/>
                }
                
            </div>
            <div className="flex flex-col items-start">
                <p className="ff_poppins text-t_primary text-base font-semibold">{props.projectName}</p>
            </div>
        </div>
        <div className="flex justify-center items-center gap-[0.625rem]">
            <p className="ff_poppins text-t_sec font-semibold text-sm text-end">{props.periode}</p>
            {
                props.projectLink &&
                    <a href={props.projectLink} target={'_blank'}>
                        <LinkIcon/>
                    </a> 
            }
        </div>
    </div>
)

export default ProjectItem;