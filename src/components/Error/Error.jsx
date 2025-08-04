import { Link } from "react-router";


const Error = () => {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen">
            <h1 className="text-3xl font-bold">Ooops!</h1>
            <h2 className="font-medium text-2xl">This page not found</h2>
            <h2 className="font-medium">Go to <Link className="border-b border-b-blue-600" to={'/'}>Home</Link></h2>
        </div>
    );
};

export default Error;