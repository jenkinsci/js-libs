package momentjs;

import org.junit.Assert;
import org.junit.Test;

import java.io.File;

/**
 * @author <a href="mailto:tom.fennelly@gmail.com">tom.fennelly@gmail.com</a>
 */
public class BundleTest {
    
    @Test
    public void test_core_assest_assembly() {
        Assert.assertTrue(new File("./target/assets-wrapper/assets/momentjs/jsmodules/momentjs2.js").exists());
    }
}
