import unittest
import LRU

class LRUTest(unittest.TestCase):
    cache = LRU.LRU()

    def test_0_put_method(self):

        self.cache.put(0)
        self.assertEqual(self.cache.cache, [0])
        self.cache.put(1)
        self.cache.put(2)
        self.cache.put(3)
        self.cache.put(4)
        self.cache.put(5)
        self.assertEqual(self.cache.cache, [1,2,3,4,5])
        self.cache.put(3)
        self.assertEqual(self.cache.cache, [1,2,4,5,3])
        self.cache.put(2)
        self.assertEqual(self.cache.cache, [1,4,5,3,2])

    def test_1_get_method(self):
        self.cache.get(3)
        self.assertEqual(self.cache.cache, [1,4,5,2])
        self.cache.get(3)
        self.assertEqual(self.cache.cache, [1,4,5])
        self.cache.put(10)
        self.cache.put(11)
        self.cache.put(12)
        self.assertEqual(self.cache.cache, [4,5,10,11,12])
        self.cache.put(5)
        self.assertEqual(self.cache.cache, [4,10,11,12,5])

    def test_2_get_cache_method(self):
        self.assertEqual(self.cache.get_cache(), [4,10,11,12,5])
        self.cache.put(0)
        self.cache.put(1)
        self.cache.put(2)
        self.cache.put(3)
        self.cache.put(4)
        self.assertEqual(self.cache.get_cache(), [0,1,2,3,4])
        self.cache.put(0)
        self.assertEqual(self.cache.get_cache(), [1,2,3,4,0])

if __name__ == '__main__':
    unittest.main()