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
			new Stock("Uber", "UBER"));
	
	/** normalized price history, starting at 100, one data point per year */
	private final Map<String, ArrayList<Float>> priceHistory = ImmutableMap.<String, ArrayList<Float>>builder()
			.put("GOOG", new ArrayList<>(Arrays.asList(100.0f, 120.0f, 117.0f, 134.0f, 144.0f, 144.0f, 177.0f)))
			.put("AAPL", new ArrayList<>(Arrays.asList(100.0f, 101.0f, 111.0f, 120.0f, 122.0f, 102.0f, 90.0f)))
			.put("TSLA", new ArrayList<>(Arrays.asList(100.0f, 120.0f, 122.0f, 122.0f, 129.0f, 120.0f, 125.0f)))
			.put("MSFT", new ArrayList<>(Arrays.asList(100.0f, 130.0f, 139.0f, 150.0f, 170.0f, 166.0f, 160.0f)))
			.put("AMZN", new ArrayList<>(Arrays.asList(100.0f, 119.0f, 117.0f, 119.0f, 110.0f, 133.0f, 135.0f)))
			.put("UBER", new ArrayList<>(Arrays.asList(100.0f, 102.0f, 99.0f, 108.0f, 128.0f, 125.0f, 130.0f)))
			.build();

	public Iterable<Stock> getAllStocks() {
		return stocks;
	}

	public List<Float> getPriceHistoryForStock(String symbol, Date from, Date to) {
		// TODO use date range and lookup in real SQL database
		List<Float> result = priceHistory.get(symbol);
		if (result != null) {
			return result;
		} else {
			return new ArrayList<Float>(Arrays.asList(0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f));
		}
	}

	public Stock getStockBySymbol(String symbol) {
		return stocks.stream().filter(b -> b.getSymbol().equals(symbol)).findFirst().orElse(null);
	}

	public Stock getRandomStock() {
		return stocks.get(new Random().nextInt(stocks.size()));
	}
}
