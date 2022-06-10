"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SizeUpdateManyWithWhereWithoutProductsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SizeScalarWhereInput_1 = require("../inputs/SizeScalarWhereInput");
const SizeUpdateManyMutationInput_1 = require("../inputs/SizeUpdateManyMutationInput");
let SizeUpdateManyWithWhereWithoutProductsInput = class SizeUpdateManyWithWhereWithoutProductsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SizeScalarWhereInput_1.SizeScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SizeScalarWhereInput_1.SizeScalarWhereInput)
], SizeUpdateManyWithWhereWithoutProductsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SizeUpdateManyMutationInput_1.SizeUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SizeUpdateManyMutationInput_1.SizeUpdateManyMutationInput)
], SizeUpdateManyWithWhereWithoutProductsInput.prototype, "data", void 0);
SizeUpdateManyWithWhereWithoutProductsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SizeUpdateManyWithWhereWithoutProductsInput", {
        isAbstract: true
    })
], SizeUpdateManyWithWhereWithoutProductsInput);
exports.SizeUpdateManyWithWhereWithoutProductsInput = SizeUpdateManyWithWhereWithoutProductsInput;
