import java.util.Scanner;
import java.util.Map;
import java.util.HashMap;

public class Names {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter your name: ");
        String name1 = scanner.nextLine();

        System.out.print("Enter other's name: ");
        String name2 = scanner.nextLine();

        Map<Character, Integer> letterCountMap1 = countLetters(name1);
        Map<Character, Integer> letterCountMap2 = countLetters(name2);

        System.out.println("\nLetter occurrences in the name '" + name1 + "':");
        displayOccurrences(letterCountMap1);

        System.out.println("\nLetter occurrences in the name '" + name2 + "':");
        displayOccurrences(letterCountMap2);

        Map<Character, Integer> subtractionResult = subtractOccurrences(letterCountMap1, letterCountMap2);
        System.out.println("\nAlgebraic subtraction result (including positives and modified negatives):");
        displayOccurrences(subtractionResult);

        int sumOfModifiedOccurrences = sumModifiedOccurrences(subtractionResult);
        System.out.println("\nSum of modified occurrences: " + sumOfModifiedOccurrences);

        int index = calculateIndex(sumOfModifiedOccurrences);

        String word = "flames";
        int finalIndex = index;

        while (word.length() > 1) {
            word = removeCharAtIndex(word, finalIndex);
            System.out.println(word);
        }

        if (!word.isEmpty()) {
            System.out.println("Final result: " + word);
        } else {
            System.out.println("Empty word.");
        }

       
        char result = determineRelationshipCode(word);
        printRelationship(result);

        scanner.close();
    }

    private static Map<Character, Integer> countLetters(String word) {
        Map<Character, Integer> letterCountMap = new HashMap<>();

        for (char c : word.toLowerCase().toCharArray()) {
            letterCountMap.put(c, letterCountMap.getOrDefault(c, 0) + 1);
        }

        return letterCountMap;
    }

    private static Map<Character, Integer> subtractOccurrences(Map<Character, Integer> map1, Map<Character, Integer> map2) {
        Map<Character, Integer> result = new HashMap<>();

        for (char key : map1.keySet()) {
            int diff = map1.getOrDefault(key, 0) - map2.getOrDefault(key, 0);
            result.put(key, diff);
        }

        for (char key : map2.keySet()) {
            if (!result.containsKey(key)) {
                result.put(key, -map2.get(key));
            }
        }

        return result;
    }

    private static int sumModifiedOccurrences(Map<Character, Integer> map) {
        int sum = 0;

        for (int value : map.values()) {
            sum += (value > 0) ? value : -value; 
        }

        return sum;
    }

    private static int calculateIndex(int sumOfModifiedOccurrences) {
        return sumOfModifiedOccurrences - 1;
    }

    private static String removeCharAtIndex(String word, int index) {
        if (word.length() == 0) {
            return ""; 
        }

        int adjustedIndex = index % word.length();
        return word.substring(0, adjustedIndex) + word.substring(adjustedIndex + 1);
    }

    private static char determineRelationshipCode(String word) {
        return (word.length() == 1) ? word.charAt(0) : 'u'; 
    }

    private static void displayOccurrences(Map<Character, Integer> letterCountMap) {
        for (Map.Entry<Character, Integer> entry : letterCountMap.entrySet()) {
            System.out.println(entry.getKey() + ": " + entry.getValue() + " times");
        }
    }

    private static void printRelationship(char result) {
        switch (result) {
            case 'f':
                System.out.println("Both of you are friends.");
                break;
            case 'l':
                System.out.println("You both are lovers.");
                break;
            case 'a':
                System.out.println("You both are affectionate.");
                break;
            case 'm':
                System.out.println("You both are married.");
                break;
            case 'e':
                System.out.println("You both are enemies.");
                break;
            case 's':
                System.out.println("You both are siblings.");
               
            
        }
    }
}