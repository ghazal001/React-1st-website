export default function Tabs({children,buttons,ButtonsContainer = 'menu'}){
    //const ButtonsContainer = buttonsContainer;
    //ButtonsContainer should always start with a capital letter and when we are using it
    //we should pass a sting to it like menu of div but as a string
    
    return(
        <>
        <ButtonsContainer>
        {buttons}
        </ButtonsContainer>
        {children}
        </>
    );
}
//buttonContainer is to get the element to apply the wrapper 