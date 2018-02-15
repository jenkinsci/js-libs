package handlebars;

import org.junit.Assert;
import org.junit.Test;

import java.io.File;
import java.util.Arrays;

/**
 * @author <a href="mailto:tom.fennelly@gmail.com">tom.fennelly@gmail.com</a>
 */
public class BundleTest {
    
    @Test
    public void test_core_assest_assembly() {
        Assert.assertTrue(new File("./target/assets-wrapper/assets/handlebars/jsmodules/handlebars3.js").exists());
    }
}
