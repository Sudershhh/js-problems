class StockMarket {
  constructor() {
    this.subscribers = [];
    this.stockPrices = {};
  }

  subscribe(subscriber) {
    this.subscribers.push(subscriber);
  }

  unSubscribe(subscriber) {
    this.subscribers = this.subscribers.filter(
      (subscriberItem) => subscriberItem !== subscriber
    );
    console.log(`${subscriber.name} has been unsubscribed.`);
  }

  notifyAllSubscribers(stock, price) {
    this.subscribers.forEach((subscriber) => subscriber.update(stock, price));
  }

  updateStockPrice(stock, price) {
    this.stockPrices[stock] = price;
    console.log(`Stock Price Updated : ${stock} is now $${price}`);
    this.notifyAllSubscribers(stock, price);
  }
}

class Subscriber {
  constructor(name) {
    this.name = name;
  }

  update(stock, price) {
    console.log(`${this.name} notified of ${stock} price change to $${price}`);
  }
}

class Investor extends Subscriber {
  constructor(name) {
    super(name);
  }

  update(stock, price) {
    super.update(stock, price);
    console.log(
      `${this.name} making investment decisions based on ${stock} price change to $${price}`
    );
  }
}

class Analyst extends Subscriber {
  constructor(name) {
    super(name);
  }

  update(stock, price) {
    super.update(stock, price);
    console.log(`${this.name} analyzing ${stock} new price: $${price}`);
  }
}

class InvestmentManager extends Subscriber {
  constructor(name) {
    super(name);
  }

  update(stock, price) {
    super.update(stock, price);
    console.log(
      `${this.name} managing portfolio based on ${stock} price change to $${price}`
    );
  }
}

const stockMarket = new StockMarket();
const warrenBuffet = new Investor("Warren Buffet");
const cathieWood = new Investor("Cathie Wood");
const goldmanSachs = new Analyst("Goldman Sachs");
const vanEck = new InvestmentManager("VanEck");

stockMarket.subscribe(warrenBuffet);
stockMarket.subscribe(cathieWood);
stockMarket.subscribe(goldmanSachs);
stockMarket.subscribe(vanEck);

stockMarket.updateStockPrice("AAPL", 226.34);
stockMarket.updateStockPrice("TSLA", 251.52);

stockMarket.unSubscribe(cathieWood);
stockMarket.updateStockPrice("AAPL", 213.98);

// Stock Price Updated : AAPL is now $226.34

// Warren Buffet notified of AAPL price change to $226.34
// Warren Buffet making investment decisions based on AAPL price change to $226.34

// Cathie Wood notified of AAPL price change to $226.34
// Cathie Wood making investment decisions based on AAPL price change to $226.34

// Goldman Sachs notified of AAPL price change to $226.34
// Goldman Sachs analyzing AAPL new price: $226.34

// VanEck notified of AAPL price change to $226.34
// VanEck managing portfolio based on AAPL price change to $226.34

// Stock Price Updated : TSLA is now $251.52

// Warren Buffet notified of TSLA price change to $251.52
// Warren Buffet making investment decisions based on TSLA price change to $251.52

// Cathie Wood notified of TSLA price change to $251.52
// Cathie Wood making investment decisions based on TSLA price change to $251.52

// Goldman Sachs notified of TSLA price change to $251.52
// Goldman Sachs analyzing TSLA new price: $251.52

// VanEck notified of TSLA price change to $251.52
// VanEck managing portfolio based on TSLA price change to $251.52

// Cathie Wood has been unsubscribed.

// Stock Price Updated : AAPL is now $213.98

// Warren Buffet notified of AAPL price change to $213.98
// Warren Buffet making investment decisions based on AAPL price change to $213.98

// Goldman Sachs notified of AAPL price change to $213.98
// Goldman Sachs analyzing AAPL new price: $213.98

// VanEck notified of AAPL price change to $213.98
// VanEck managing portfolio based on AAPL price change to $213.98
