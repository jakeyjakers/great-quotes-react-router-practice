import QuoteList from  '../components/quotes/QuoteList'

const DUMMY_QUOTES = [
    { id: 'q1', author: 'Lugi', text: "I'm a-Luigi, number one!"},
    { id: 'q2', author: 'General Patton', text: "If everyone is thinking alike, someone isnt thinking."},

]

const AllQuotes = () => {

    return (
        <QuoteList quotes={DUMMY_QUOTES}/>
    )
}

export default AllQuotes