public class FinancialForecast {

    // Recursive method to calculate future value
    public static double predictFutureValue(double initialValue, double growthRate, int years) {
        if (years == 0) {
            return initialValue;
        }
        return predictFutureValue(initialValue * (1 + growthRate), growthRate, years - 1);
    }

    public static void main(String[] args) {
        double initialInvestment = 10000; // Starting value
        double annualGrowthRate = 0.08;   // 8% growth per year
        int years = 5;

        double futureValue = predictFutureValue(initialInvestment, annualGrowthRate, years);
        System.out.printf("Predicted future value after %d years: %.2f\n", years, futureValue);
    }
}
