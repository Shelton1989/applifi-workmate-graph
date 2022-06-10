"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductUpdatesizeIdsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ProductUpdatesizeIdsInput = class ProductUpdatesizeIdsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductUpdatesizeIdsInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductUpdatesizeIdsInput.prototype, "push", void 0);
ProductUpdatesizeIdsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductUpdatesizeIdsInput", {
        isAbstract: true
    })
], ProductUpdatesizeIdsInput);
exports.ProductUpdatesizeIdsInput = ProductUpdatesizeIdsInput;
