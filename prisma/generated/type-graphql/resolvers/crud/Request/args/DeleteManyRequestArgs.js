"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyRequestArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RequestWhereInput_1 = require("../../../inputs/RequestWhereInput");
let DeleteManyRequestArgs = class DeleteManyRequestArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RequestWhereInput_1.RequestWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RequestWhereInput_1.RequestWhereInput)
], DeleteManyRequestArgs.prototype, "where", void 0);
DeleteManyRequestArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyRequestArgs);
exports.DeleteManyRequestArgs = DeleteManyRequestArgs;
