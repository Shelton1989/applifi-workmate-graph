"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteSizeArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SizeWhereUniqueInput_1 = require("../../../inputs/SizeWhereUniqueInput");
let DeleteSizeArgs = class DeleteSizeArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SizeWhereUniqueInput_1.SizeWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SizeWhereUniqueInput_1.SizeWhereUniqueInput)
], DeleteSizeArgs.prototype, "where", void 0);
DeleteSizeArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteSizeArgs);
exports.DeleteSizeArgs = DeleteSizeArgs;
