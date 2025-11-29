const TodayDate= ()=>{
    const today = new Date();
    const formatted = new Intl.DateTimeFormat("en-US",{
        weekday : "long",
        month: "short",
        day :"numeric"
    }).format(today);

    return(
        <>{formatted}</>
    )
}
export default TodayDate;