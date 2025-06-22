//SingletonPatternExample
import java.util.*;
class SingletonPatternExample
{
    public static void main(String[] args) {
        Logger obj1 = Logger.getObj();
        Logger obj2 = Logger.getObj();
        System.out.println("test to verify that only one instance of Logger is created and used across the application:\nsame object?  " + (obj1 == obj2));
    }

}
class Logger 
{
    private static Logger logObj = new Logger();
    private Logger()
    {
        System.out.println("object created");
    }
    public static Logger getObj()
    {
        return logObj;
    }
    

}
