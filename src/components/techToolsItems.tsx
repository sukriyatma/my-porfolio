
export interface TechToolsItemProps {
    name: string;
    imageUrl: string;
}

const TechToolsItem: React.FC<TechToolsItemProps> = (props: TechToolsItemProps) => (
    <div className="w-[3.125rem] h-[3.125rem] content-center relative justify-self-center">
        <img src={props.imageUrl} alt={props.name} className="w-auto max-h-full justify-self-center"/>
    </div>
);

export default TechToolsItem;