package app.stock;

import com.google.common.collect.*;
import java.util.*;

public class StockDao {

	private final List<Stock> stocks = ImmutableList.of(
			new Stock("Google", "GOOG"),
			new Stock("Apple", "AAPL"),
			new Stock("Tesla", "TSLA"),
			new Stock("Microsoft", "MSFT"),
			new Stock("Amazon", "AMZN"),
			new Stock("Uber", "UBER")
			);

	public Iterable<Stock> getAllStocks() {
		return stocks;
	}

	public Stock getStockBySymbol(String symbol) {
		return stocks.stream().filter(b -> b.getSymbol().equals(symbol)).findFirst().orElse(null);
	}

	public Stock getRandomStock() {
		return stocks.get(new Random().nextInt(stocks.size()));
	}
}
