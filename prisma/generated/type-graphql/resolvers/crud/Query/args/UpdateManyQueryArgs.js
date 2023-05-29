"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyQueryArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const QueryUpdateManyMutationInput_1 = require("../../../inputs/QueryUpdateManyMutationInput");
const QueryWhereInput_1 = require("../../../inputs/QueryWhereInput");
let UpdateManyQueryArgs = class UpdateManyQueryArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QueryUpdateManyMutationInput_1.QueryUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", QueryUpdateManyMutationInput_1.QueryUpdateManyMutationInput)
], UpdateManyQueryArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QueryWhereInput_1.QueryWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", QueryWhereInput_1.QueryWhereInput)
], UpdateManyQueryArgs.prototype, "where", void 0);
UpdateManyQueryArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyQueryArgs);
exports.UpdateManyQueryArgs = UpdateManyQueryArgs;
