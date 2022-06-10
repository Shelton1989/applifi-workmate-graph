"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManySizeArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SizeWhereInput_1 = require("../../../inputs/SizeWhereInput");
let DeleteManySizeArgs = class DeleteManySizeArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SizeWhereInput_1.SizeWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SizeWhereInput_1.SizeWhereInput)
], DeleteManySizeArgs.prototype, "where", void 0);
DeleteManySizeArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManySizeArgs);
exports.DeleteManySizeArgs = DeleteManySizeArgs;
