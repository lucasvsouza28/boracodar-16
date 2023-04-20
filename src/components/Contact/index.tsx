type ContactType = {
    name: string,
    number: string,
    avatar: string
} 
 
type ContactProps = {
    contact: ContactType,
}
const Contact = ({
    contact,
}: ContactProps) => (
    <div
        className="flex gap-4 flex-1"
    >
        <img
            src={contact.avatar}
            className="h-12 w-12 rounded-full object-cover"
        />
        <div
            className="flex flex-col gap-1 text-xs"
        >
            <span
                className="text-[#E1E1E6] font-bold"
            >
                {contact.name}
            </span>
            <span
                className="text-[#8C8CBA]"
            >
                {contact.number}
            </span>
        </div>
    </div>
);

export default Contact;
