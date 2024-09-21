
interface ExperienceItemProps {
    companyName: string;
    companyImage: string;
    position: string;
    periode: string;
}

const ExperienceItem: React.FC<ExperienceItemProps> = (props: ExperienceItemProps) => {
    
    return (
        <div className="flex p-[0.9375rem] justify-between items-center self-stretch rounded-[1.875rem] border outline-[#f3f3f3] bg-[#fff]">
            <div className="flex items-center gap-[0.9375rem]">
                <div className="w-[3.125rem] h-[3.125rem]">
                    <img src={props.companyImage} alt="neobank" className="rounded-md"/>
                </div>
                <div className="flex flex-col items-start">
                    <p className="ff_poppins text-t_primary text_base">{props.position}</p>
                    <p className="ff_poppins text-t_primary text-base font-semibold">{props.companyName}</p>
                </div>
            </div>
            <div className="flex justify-center items-center gap-[0.625rem]">
                <p className="ff_poppins text-t_sec font-semibold text-sm text-end">{props.periode}</p>
            </div>
        </div>
    )
}

export default ExperienceItem;