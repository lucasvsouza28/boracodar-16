import { useMemo } from "react"
import Contact from "../Contact"

type ContactType = {
name: string,
number: string,
avatar: string
}

type ContactsGroupedByFirstLetter = {
    [key: string]: ContactType[]
}

const EmptyContactList = () => (
  <div className="flex justify-center mt-5">Nenhum contato encontrado</div>
)

type GroupLetterProps = {
  char: string,
};
const GroupLetter = ({
  char,
}: GroupLetterProps) => {
  const colors = ['#633BBC', '#07847E', '#9A00B3', '#0088B3']
  const getRandomColor = () => colors[Math.round(Math.random() * colors.length)]


  return (
    <span
      className="flex items-center justify-center
      w-10 h-10 rounded-lg
      uppercase"
      style={{ backgroundColor: getRandomColor() }}
    >
      {char}
    </span>
  );
};

type ContactListProps = {
    query: string,
}

const ContactList = ({
    query,
}: ContactListProps) => {    
    
    const filtered = useMemo(() => {
      const contacts: ContactType[] = [
        { name: 'Z Contact', number: '(11) 99999-9999', avatar: 'https://cataas.com/cat' },
        { name: 'X Contact', number: '(11) 99999-9999', avatar: 'https://cataas.com/cat' },
        { name: 'Y Contact', number: '(11) 99999-9999', avatar: 'https://cataas.com/cat' },
        { name: 'W Contact', number: '(11) 99999-9999', avatar: 'https://cataas.com/cat' },
        { name: 'A Contact', number: '(11) 99999-9999', avatar: 'https://cataas.com/cat' },
        { name: 'A Contact', number: '(11) 99999-9999', avatar: 'https://cataas.com/cat' },
        { name: 'B Contact', number: '(11) 99999-9999', avatar: 'https://cataas.com/cat' },
        { name: 'B Contact', number: '(11) 99999-9999', avatar: 'https://cataas.com/cat' },
        { name: 'B Contact', number: '(11) 99999-9999', avatar: 'https://cataas.com/cat' },
        { name: 'C Contact', number: '(11) 99999-9999', avatar: 'https://cataas.com/cat' },
        { name: 'C Contact', number: '(11) 99999-9999', avatar: 'https://cataas.com/cat' },
        { name: 'C Contact', number: '(11) 99999-9999', avatar: 'https://cataas.com/cat' },
        { name: 'D Contact', number: '(11) 99999-9999', avatar: 'https://cataas.com/cat' },
        { name: 'D Contact', number: '(11) 99999-9999', avatar: 'https://cataas.com/cat' },
        { name: 'D Contact', number: '(11) 99999-9999', avatar: 'https://cataas.com/cat' },
        { name: 'D Contact', number: '(11) 99999-9999', avatar: 'https://cataas.com/cat' },
        { name: 'E Contact', number: '(11) 99999-9999', avatar: 'https://cataas.com/cat' },
        { name: 'E Contact', number: '(11) 99999-9999', avatar: 'https://cataas.com/cat' },
        { name: 'E Contact', number: '(11) 99999-9999', avatar: 'https://cataas.com/cat' },
        { name: 'F Contact', number: '(11) 99999-9999', avatar: 'https://cataas.com/cat' },
        { name: 'F Contact', number: '(11) 99999-9999', avatar: 'https://cataas.com/cat' },
        { name: 'F Contact', number: '(11) 99999-9999', avatar: 'https://cataas.com/cat' },
      ];
        return contacts.filter(c =>
          !query ||
          (c.name.toLowerCase().includes(query.toLowerCase()) || c.number.toLowerCase().includes(query.toLowerCase()))
        )
  
    }, [query]);
  
    const grouped = useMemo(() => {
      return filtered.reduce((acc, curr) => {
        const letter = curr.name[0]
        acc[letter] = acc[letter] || []
        
        acc[letter].push(curr)
        
        return acc;
      }, {} as ContactsGroupedByFirstLetter);
    }, [filtered])

    const orderedKeys = useMemo(() => Object.keys(grouped).sort(), [grouped]);
    
    if (filtered.length === 0) return <EmptyContactList />
    
    return (
      <ul
        className="px-10 pt-12 pb-48 h-screen overflow-auto
        scrollbar-thin scrollbar-thumb-[#282843] scrollbar-track-[transparent]"
      >
        {orderedKeys.map((key) => (
          <li
            key={key}
            className="flex gap-12 mb-10"
          >
            <div>
              <GroupLetter
                char={key}
              />
            </div>
            <div
              className="flex flex-col gap-8"
            >
              {grouped[key].map((item, j) => (
                <Contact
                  key={j}
                  contact={item}
                />
              ))}
  
            </div>
          </li>
        ))}
      </ul>
    )
};

export default ContactList;
