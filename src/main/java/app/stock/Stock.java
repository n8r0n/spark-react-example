package app.stock;

import lombok.*;

@Value // All fields are private and final. Getters (but not setters) are generated (https://projectlombok.org/features/Value.html)
public class Stock {
    String name;
    String symbol;
}
