
export interface SocialMediaItemProps {
    link: string;
    img: string;
    name: string;
}

const SocialMediaItem: React.FC<SocialMediaItemProps> = (props: SocialMediaItemProps) => (
    <div className="w-[1.875rem]">
        <a href={props.link} target="_blank" >
            <img src={props.img} alt={props.name} />
        </a>
    </div>
);

export default SocialMediaItem;