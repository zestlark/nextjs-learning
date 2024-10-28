import ServerComp from "./servercomp";
import Wrap from "./wrap";

function Signup() {
    console.log('im client code signup page');
    
    return (
        <>
        <Wrap>
        <div>Signup</div>
        <ServerComp/>
        </Wrap>
        </>
    )
}

export default Signup