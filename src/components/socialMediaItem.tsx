export interface SocialMediaItemProps {
    link: string;
    img: string;
    name: string;
}

const SocialMediaItem: React.FC<SocialMediaItemProps> = (props: SocialMediaItemProps) => (
    <div>
        <a href={props.link}>
            <img src={props.img} alt={props.name} className="w-[1.875rem]" />
        </a>
    </div>
);

export default SocialMediaItem;