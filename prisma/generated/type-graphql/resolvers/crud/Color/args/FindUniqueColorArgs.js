"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueColorArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ColorWhereUniqueInput_1 = require("../../../inputs/ColorWhereUniqueInput");
let FindUniqueColorArgs = class FindUniqueColorArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ColorWhereUniqueInput_1.ColorWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ColorWhereUniqueInput_1.ColorWhereUniqueInput)
], FindUniqueColorArgs.prototype, "where", void 0);
FindUniqueColorArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueColorArgs);
exports.FindUniqueColorArgs = FindUniqueColorArgs;
