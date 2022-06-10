"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ColorWhereUniqueInput = class ColorWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ColorWhereUniqueInput.prototype, "id", void 0);
ColorWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ColorWhereUniqueInput", {
        isAbstract: true
    })
], ColorWhereUniqueInput);
exports.ColorWhereUniqueInput = ColorWhereUniqueInput;
