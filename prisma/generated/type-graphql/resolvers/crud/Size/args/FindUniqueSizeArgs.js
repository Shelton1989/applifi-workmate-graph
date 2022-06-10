"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueSizeArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SizeWhereUniqueInput_1 = require("../../../inputs/SizeWhereUniqueInput");
let FindUniqueSizeArgs = class FindUniqueSizeArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SizeWhereUniqueInput_1.SizeWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SizeWhereUniqueInput_1.SizeWhereUniqueInput)
], FindUniqueSizeArgs.prototype, "where", void 0);
FindUniqueSizeArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueSizeArgs);
exports.FindUniqueSizeArgs = FindUniqueSizeArgs;
