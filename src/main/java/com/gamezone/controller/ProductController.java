package com.gamezone.controller;

import com.gamezone.model.Category;
import com.gamezone.model.Product;
import com.gamezone.repository.CategoryRepository;
import com.gamezone.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/products")
@CrossOrigin(value = "*", allowedHeaders = "*")
public class ProductController {

    ProductRepository productRepository;
    CategoryRepository categoryRepository;

    @Autowired
    public ProductController(ProductRepository productRepository, CategoryRepository categoryRepository) {

        this.productRepository = productRepository;
        this.categoryRepository = categoryRepository;
    }

    @PostMapping("/add")
    private ResponseEntity<Product> registerProduct(@RequestBody Product product) {
        if (categoryRepository.findByName(product.getCategory().getName()).isPresent()) {
            Category c = categoryRepository.getByName(product.getCategory().getName());
            product.setCategory(c);
            product.setTitle(product.getTitle().toLowerCase());
            return ResponseEntity.status(HttpStatus.CREATED).body(productRepository.save(product));
        } else
            return ResponseEntity.status(HttpStatus.CREATED).body(productRepository.save(product));
    }

    @GetMapping("/all")
    private ResponseEntity<List<Product>> listAllProducts() {
        return ResponseEntity.ok(productRepository.findAll());
    }

    @GetMapping("/{id}")
    private ResponseEntity<Optional<Product>> findProductById(@PathVariable Integer id) {
        return ResponseEntity.ok(productRepository.findById(id));
    }

    @GetMapping("/categories/all")
    private ResponseEntity<List<Category>> listAllCategories() {
        return ResponseEntity.ok(categoryRepository.findAll());
    }

    @GetMapping("/category/{name}")
    private ResponseEntity<List<Product>> listProductsByCategory(@PathVariable String name) {
        return ResponseEntity.ok(productRepository.findByCategoryName(name));
    }

    @DeleteMapping("/{id}")
    private ResponseEntity<String> deleteProductById(@PathVariable Integer id) {
        productRepository.deleteById(id);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).body("Produto excluído com êxito!");
    }

    @DeleteMapping("/category/{id}")
    private ResponseEntity<String> deleteCategoryById(@PathVariable Integer id) {
        categoryRepository.deleteById(id);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).body("Categoria excluída com êxito!");
    }

}
