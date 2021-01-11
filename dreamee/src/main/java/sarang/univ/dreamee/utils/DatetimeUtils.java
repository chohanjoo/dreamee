package sarang.univ.dreamee.utils;

import java.util.Calendar;
import java.util.Date;

public class DatetimeUtils {

    public static Date getDatetime() {
        Calendar time = Calendar.getInstance();
        return time.getTime();

//        return time.get(Calendar.YEAR) + "-" + time.get(Calendar.MONTH) + "-" + time.get(Calendar.DAY_OF_MONTH)
//                + " " + time.get(Calendar.HOUR_OF_DAY) + ":" + time.get(Calendar.MINUTE) + ":" + time.get(Calendar.SECOND);
    }
}
