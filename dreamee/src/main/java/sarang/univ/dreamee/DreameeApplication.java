package sarang.univ.dreamee;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ImportResource;

@SpringBootApplication
@ImportResource(value = {"classpath:META-INF/datasource.xml"})
@MapperScan(value = {"sarang.univ.dreamee.dao"})
public class DreameeApplication {
	public static void main(String[] args) {
		SpringApplication.run(DreameeApplication.class, args);
	}
}
