import { useParams, Route, Link, useRouteMatch } from "react-router-dom";
import { Fragment } from "react";
import HighLightedQuote from "../components/quotes/HighlightedQuote";
import Comments from "../components/comments/Comments";

const DUMMY_QUOTES = [
  { id: "q1", author: "Lugi", text: "I'm a-Luigi, number one!" },
  {
    id: "q2",
    author: "General Patton",
    text: "If everyone is thinking alike, someone isnt thinking.",
  },
];

const QuoteDetails = () => {
    const match = useRouteMatch()
  const params = useParams();

  const quote = DUMMY_QUOTES.find((quote) => {
    return quote.id === params.quoteId;
  });

  if (!quote) {
    return <p>No Quotes Found!</p>;
  }

  return (
    <Fragment>
      <HighLightedQuote text={quote.text} author={quote.author} />
      <Route path={`/quotes/${params.quoteId}`} exact>
      <div className="centered">
        <Link className="btn--flat" to={`/quotes/${params.quoteId}/comments`}>
          Load Comments
        </Link>
      </div>
      </Route>
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetails;
