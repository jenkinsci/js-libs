package jquery;

import org.junit.Assert;
import org.junit.Test;

import java.io.File;

/**
 * @author <a href="mailto:tom.fennelly@gmail.com">tom.fennelly@gmail.com</a>
 */
public class BundleTest {
    
    @Test
    public void test_core_assest_assembly() {
        Assert.assertTrue(new File("./target/assets-wrapper/assets/jquery-detached/jsmodules/jquery2.js").exists());
        Assert.assertTrue(new File("./target/assets-wrapper/assets/jquery-detached/jsmodules/jqueryui1.js").exists());
        Assert.assertTrue(new File("./target/assets-wrapper/assets/jquery-detached/jsmodules/jqueryui1/style.css").exists());
        Assert.assertTrue(new File("./target/assets-wrapper/assets/jquery-detached/jsmodules/jqueryui1/images/ui-bg_diagonals-thick_18_b81900_40x40.png").exists());
    }
}
