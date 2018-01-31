package app.stock;

import lombok.Value;

/** A data point representing the price of one stock at one point in time */
@Value
public class PriceData {
   /** Price in USD */
   public float price;
   /** Years: e.g. Feb 2001 = 2001.083, Feb 15 2001 = 2001.126 */
   public float date; 
}
