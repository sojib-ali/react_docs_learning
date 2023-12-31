import{getImageUrl} from './utils.js'
export default function Profile(){
    return(
        <Card>
            <Avatar
            size={100}
            person={{
                name:'Katsuko Saruhashi',
                imageId: 'Yfe'
            }}
            >
            </Avatar>
        </Card>
    );
}
function Card({children}){
    return(
        <div className="card">
            {children}
        </div>
    );
}

function Avatar({person,size}){
    return(
        <img
        className="avatar"
        src={getImageUrl(person)}
        alt={person.name}
        width={size}
        height={size}
        />
    );
}