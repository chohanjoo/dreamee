package sarang.univ.dreamee.utils;

import java.util.Calendar;

public class DatetimeUtils {

    public static String getDatetime() {
        Calendar time = Calendar.getInstance();

        return time.get(Calendar.YEAR) + "-" + time.get(Calendar.MONTH) + "-" + time.get(Calendar.DAY_OF_MONTH)
                + " " + time.get(Calendar.HOUR_OF_DAY) + ":" + time.get(Calendar.MINUTE) + ":" + time.get(Calendar.SECOND);
    }
}
