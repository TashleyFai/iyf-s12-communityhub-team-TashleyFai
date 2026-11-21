import useToggle from '../hooks/useToggle';

function ModalDemo() {
    const [isOpen, { toggle, setFalse }] = useToggle(false);
   
    return (
        <>
            <button onClick={toggle}>Open Modal</button>
           
            {isOpen && (
                <div className="modal">
                    <p>Modal Content - useToggle works!</p>
                    <button onClick={setFalse}>Close</button>
                </div>
            )}
        </>
    );
}

export default ModalDemo;