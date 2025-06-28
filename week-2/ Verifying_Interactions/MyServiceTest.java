package com.example;

import static org.mockito.Mockito.*;
import org.junit.jupiter.api.Test;

public class MyServiceTest {

    @Test
    public void testVerifyInteraction() {
        ExternalApi mockApi = mock(ExternalApi.class);
        MyService service = new MyService(mockApi);

        service.fetchData(); // method that internally calls getData()

        // Verify that mockApi.getData() was called exactly once
        verify(mockApi).getData();
    }
}
