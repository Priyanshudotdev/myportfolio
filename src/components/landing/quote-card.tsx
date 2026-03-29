import { FaQuoteRight } from "react-icons/fa";
import Container from "../common/container";

const quotes = [
  { quote: "! The only power I have is not giving up", source: "Black Clover" },
];

const QuoteCard = () => {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <Container className="px-8 py-4 mt-4">
      <div className="py-4 px-16 flex flex-col items-center justify-center gap-4">
        <div className="qoute_card flex flex-col items-center justify-center p-8 shadow-[inset_0_4px_8px_#46464620,inset_-4px_0_8px_#46464620] border border-muted w-full h-32 rounded-xl relative">
          <q className="z-10 text-xl text-left text-muted-foreground italic">
            {randomQuote.quote}
          </q>
          <p className="z-10 text-right w-full italic text-muted-foreground">
            - {randomQuote.source}
          </p>
          <FaQuoteRight className="text-6xl text-muted absolute bottom-5 right-10" />
        </div>
      </div>
    </Container>
  );
};

export default QuoteCard;
