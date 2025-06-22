import java.util.*;

public class Forecast 
{
    public static double calculate(double currentValue, double growthRate, int years) {
        if (years == 0) {
            return currentValue;
        }
        return calculate(currentValue, growthRate, years - 1) * (1 + growthRate);
    }

    public static void main(String[] args) {
        double currentValue = 1000.0;   
        double growthRate = 0.10; 
        int years ;
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter year:");
        years = sc.nextInt();                  

        double futureValue = calculate(currentValue, growthRate, years);

        System.out.printf("Future Value after %d years: Rs.%.2f", years, futureValue);
    }
}

/*
 
 */