import java.util.*;
/*
Big O Notation :
- Big O describes the worst-case time complexity of algorithms
- O(1) = always same speed
- O(n) = gets slower as data increases
- O(log n) = gets slower but not as much

Search Operation Scenarios:
- Best case: Element found immediately (first position)
- Average case: Element found in middle
- Worst case: Element not found or at the end
*/
public class Ecommerce 
{
    public static void main(String args[])
    {
        Product[] products = {
            new Product(1, "Laptop", "Electronics"),
            new Product(2, "Phone", "Electronics"),
            new Product(3, "Watch", "Accessories"),
            new Product(4, "Sunglasses", "Fashion"),
            new Product(5, "Notebook", "Stationery"),
            new Product(6, "Camera", "Electronics"),
            new Product(7, "Headphones", "Electronics"),
            new Product(8, "Water Bottle", "Sports"),
            new Product(9, "Microwave", "Home Appliances"),
            new Product(10, "Pen", "Stationery"),
            new Product(11, "Pencil", "Stationery"),
            new Product(12, "Eraser", "Stationery"),
            new Product(13, "Highlighter", "Stationery"),
            new Product(14, "Sketchbook", "Stationery"),
            new Product(15, "Marker", "Stationery"),
            new Product(16, "Sticky Notes", "Stationery")
        };
        Product[] sortedProducts = products.clone();
        Arrays.sort(sortedProducts, (a, b) -> a.productName.compareToIgnoreCase(b.productName));
        Product found1 = Search.linearSearch(products, "Phone");
        Product found2 = Search.binarySearch(sortedProducts, "Phone");
        System.out.println("Linear Search Result: " + (found1 != null ? found1 : "Not Found"));
        System.out.println("Binary Search Result: " + (found2 != null ? found2 : "Not Found"));
    }
}

class Product {
    int productId;
    String productName;
    String category;

    public Product(int productId, String productName, String category) {
        this.productId = productId;
        this.productName = productName;
        this.category = category;
    }

    public String toString() {
        return "Product{" + "ID=" + productId + ", Name='" + productName + '\'' + ", Category='" + category + '\'' + '}';
    }
}

class Search {

    public static Product linearSearch(Product[] products, String targetName) {
        for (Product product : products) {
            if (product.productName.equalsIgnoreCase(targetName)) {
                return product;
            }
        }
        return null;
    }
    public static Product binarySearch(Product[] products, String targetName) 
    {
        int left = 0;
        int right = products.length - 1;

        while (left <= right) {
            int mid = (left + right) / 2;
            int result = products[mid].productName.compareToIgnoreCase(targetName);

            if (result == 0)
                return products[mid];
            else if (result < 0)
                left = mid + 1;
            else
                right = mid - 1;
        }

        return null;
    }
}

/*
    Binary search is more suitable for the e-commerce platform as it offers faster search performance (O(log n)) on sorted product lists. 
    This ensures quick and efficient user experience even with large datasets.
 
 */
