import { AppError } from "../../../../shared/errors/AppError";
import { CategoriesRepositoryInMemory } from "../../repositories/in-memory/CategoriesRepositoryInMemory";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

let createCategory: CreateCategoryUseCase;
let categoriesRepository: CategoriesRepositoryInMemory;

describe("Create category", () => {
  beforeEach(() => {
    categoriesRepository = new CategoriesRepositoryInMemory();
    createCategory = new CreateCategoryUseCase(categoriesRepository);
  });

  it("should be able to create a new category", async () => {
    const category = {
      name: "test",
      description: "test description",
    };

    await createCategory.execute({
      name: category.name,
      description: category.description,
    });

    const categoryExpected = await categoriesRepository.findByName(
      category.name
    );

    expect(categoryExpected).toHaveProperty("id");
  });

  it("should not be able to create a new category with name exist", async () => {
    expect(async () => {
      const category = {
        name: "test",
        description: "test description",
      };

      await createCategory.execute({
        name: category.name,
        description: category.description,
      });

      await createCategory.execute({
        name: category.name,
        description: category.description,
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
