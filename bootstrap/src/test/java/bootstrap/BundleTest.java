package bootstrap;

import org.junit.Assert;
import org.junit.Test;

import java.io.File;

/**
 * @author <a href="mailto:tom.fennelly@gmail.com">tom.fennelly@gmail.com</a>
 */
public class BundleTest {
    
    @Test
    public void test_core_assest_assembly() {
        Assert.assertTrue(new File("./target/assets-wrapper/assets/bootstrap/jsmodules/bootstrap3.js").exists());
        Assert.assertTrue(new File("./target/assets-wrapper/assets/bootstrap/jsmodules/bootstrap3/style.css").exists());
        Assert.assertTrue(new File("./target/assets-wrapper/assets/bootstrap/jsmodules/bootstrap3/fonts/glyphicons-halflings-regular.eot").exists());
    }
}
