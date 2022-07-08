"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let RequestWhereUniqueInput = class RequestWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RequestWhereUniqueInput.prototype, "id", void 0);
RequestWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RequestWhereUniqueInput", {
        isAbstract: true
    })
], RequestWhereUniqueInput);
exports.RequestWhereUniqueInput = RequestWhereUniqueInput;
