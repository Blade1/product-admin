import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router, ParamMap } from "@angular/router";
import { ProductService } from "../product.service";
import { Product } from "../product";
import { Observable } from "rxjs";
import { switchMap } from "rxjs/operators";
import { FormBuilder, Validators, FormArray } from "@angular/forms";

@Component({
  selector: "app-product-form",
  templateUrl: "./product-form.component.html",
  styleUrls: ["./product-form.component.css"]
})
export class ProductFormComponent implements OnInit {
  product: Observable<Product>;

  productForm = this.fb.group({
    id: ["", Validators.required],
    name: this.fb.group({
      en: [""],
      uk: [""]
    }),
    description: this.fb.group({
      en: [""],
      uk: [""]
    }),
    price: ["", Validators.required],
    thumbnail: ["", Validators.required],
    images: this.fb.array([this.fb.control("")]),
    categories: this.fb.array([this.fb.control("")]),
    specs: this.fb.array([
      this.fb.group({
        id: ["", Validators.required],
        value: this.fb.group({
          en: [""],
          uk: [""]
        })
      })
    ]),
    skus: this.fb.array([
      this.fb.group({
        id: ["", Validators.required],
        count: ["", Validators.required],
        specs: this.fb.array([
          this.fb.group({
            id: ["", Validators.required],
            value: this.fb.group({
              en: [""],
              uk: [""]
            })
          })
        ])
      })
    ])
  });

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: ProductService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.product = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.service.getProduct(params.get("id")))
    );
    this.product.subscribe(
      p => {
        this.initArrayForm(this.images, p.images.length);
        this.initArrayForm(this.categories, p.categories.length);
        this.productForm.patchValue(p);
      },
      err => console.error("Observer got an error: " + err),
      () => console.log("Observer got a complete notification")
    );
  }

  initArrayForm(array: FormArray, n) {
    array.clear(); 
    for(let i in n) {
      array.push(this.fb.control(""));
    }
  }

  get images() {
    return this.productForm.get("images") as FormArray;
  }

  get categories() {
    return this.productForm.get("categories") as FormArray;
  }

  addImage() {
    this.images.push(this.fb.control(""));
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.productForm.value);
  }
}
